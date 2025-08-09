/**
 * ModernStore Performance Utilities
 * Optimizations for better user experience and performance
 */

/**
 * Lazy Loading Utilities
 */
export class LazyLoader {
  constructor(options = {}) {
    this.options = {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );
  }
  
  observe(elements) {
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
    }
    
    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach(el => this.observer.observe(el));
    } else {
      this.observer.observe(elements);
    }
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadElement(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }
  
  loadElement(element) {
    // Load images
    if (element.tagName === 'IMG' && element.dataset.src) {
      element.src = element.dataset.src;
      element.classList.add('loaded');
    }
    
    // Load background images
    if (element.dataset.bgSrc) {
      element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
      element.classList.add('bg-loaded');
    }
    
    // Load content
    if (element.dataset.loadContent) {
      this.loadContent(element);
    }
    
    // Trigger custom load event
    element.dispatchEvent(new CustomEvent('lazy-loaded'));
  }
  
  async loadContent(element) {
    const url = element.dataset.loadContent;
    try {
      const response = await fetch(url);
      const content = await response.text();
      element.innerHTML = content;
      element.classList.add('content-loaded');
    } catch (error) {
      console.error('Failed to load content:', error);
      element.classList.add('content-error');
    }
  }
}

/**
 * Image Optimization
 */
export class ImageOptimizer {
  static createResponsiveImage(src, alt, options = {}) {
    const {
      sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      loading = 'lazy',
      className = ''
    } = options;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = loading;
    img.className = className;
    img.sizes = sizes;
    
    // Generate srcset for different sizes
    const baseName = src.replace(/\.[^/.]+$/, '');
    const extension = src.split('.').pop();
    
    const srcset = [
      `${baseName}-400w.${extension} 400w`,
      `${baseName}-800w.${extension} 800w`,
      `${baseName}-1200w.${extension} 1200w`,
      `${baseName}-1600w.${extension} 1600w`
    ].join(', ');
    
    img.srcset = srcset;
    
    return img;
  }
  
  static createPictureElement(sources, fallback, alt) {
    const picture = document.createElement('picture');
    
    sources.forEach(source => {
      const sourceEl = document.createElement('source');
      sourceEl.srcset = source.srcset;
      sourceEl.type = source.type;
      if (source.media) sourceEl.media = source.media;
      picture.appendChild(sourceEl);
    });
    
    const img = document.createElement('img');
    img.src = fallback;
    img.alt = alt;
    img.loading = 'lazy';
    picture.appendChild(img);
    
    return picture;
  }
  
  static preloadCriticalImages(urls) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

/**
 * Performance Monitoring
 */
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.init();
  }
  
  init() {
    // Core Web Vitals
    this.measureCLS();
    this.measureFID();
    this.measureLCP();
    
    // Custom metrics
    this.measurePageLoad();
    this.measureResourceTiming();
  }
  
  measureCLS() {
    if (!('LayoutShift' in window)) return;
    
    let clsValue = 0;
    let clsEntries = [];
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
      
      this.metrics.set('CLS', {
        value: clsValue,
        entries: clsEntries,
        rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
      });
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.set('CLS', observer);
  }
  
  measureFID() {
    if (!('PerformanceEventTiming' in window)) return;
    
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fidValue = entry.processingStart - entry.startTime;
        
        this.metrics.set('FID', {
          value: fidValue,
          entry: entry,
          rating: fidValue < 100 ? 'good' : fidValue < 300 ? 'needs-improvement' : 'poor'
        });
        
        // Only measure the first input
        observer.disconnect();
      }
    });
    
    observer.observe({ entryTypes: ['first-input'] });
    this.observers.set('FID', observer);
  }
  
  measureLCP() {
    if (!('LargestContentfulPaint' in window)) return;
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcpValue = lastEntry.startTime;
      
      this.metrics.set('LCP', {
        value: lcpValue,
        entry: lastEntry,
        rating: lcpValue < 2500 ? 'good' : lcpValue < 4000 ? 'needs-improvement' : 'poor'
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.set('LCP', observer);
  }
  
  measurePageLoad() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      this.metrics.set('PageLoad', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart,
        ttfb: navigation.responseStart - navigation.requestStart
      });
    });
  }
  
  measureResourceTiming() {
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.initiatorType === 'img') {
          this.trackImageLoad(entry);
        } else if (entry.initiatorType === 'script') {
          this.trackScriptLoad(entry);
        } else if (entry.initiatorType === 'css') {
          this.trackStyleLoad(entry);
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
    this.observers.set('Resource', observer);
  }
  
  trackImageLoad(entry) {
    const images = this.metrics.get('Images') || [];
    images.push({
      url: entry.name,
      duration: entry.duration,
      size: entry.transferSize,
      cached: entry.transferSize === 0
    });
    this.metrics.set('Images', images);
  }
  
  trackScriptLoad(entry) {
    const scripts = this.metrics.get('Scripts') || [];
    scripts.push({
      url: entry.name,
      duration: entry.duration,
      size: entry.transferSize
    });
    this.metrics.set('Scripts', scripts);
  }
  
  trackStyleLoad(entry) {
    const styles = this.metrics.get('Styles') || [];
    styles.push({
      url: entry.name,
      duration: entry.duration,
      size: entry.transferSize
    });
    this.metrics.set('Styles', styles);
  }
  
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
  
  getScore() {
    const cls = this.metrics.get('CLS');
    const fid = this.metrics.get('FID');
    const lcp = this.metrics.get('LCP');
    
    const scores = [];
    if (cls) scores.push(cls.rating === 'good' ? 100 : cls.rating === 'needs-improvement' ? 50 : 0);
    if (fid) scores.push(fid.rating === 'good' ? 100 : fid.rating === 'needs-improvement' ? 50 : 0);
    if (lcp) scores.push(lcp.rating === 'good' ? 100 : lcp.rating === 'needs-improvement' ? 50 : 0);
    
    return scores.length ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
  }
  
  report() {
    console.group('Performance Report');
    console.table(this.getMetrics());
    console.log(`Overall Score: ${this.getScore()}/100`);
    console.groupEnd();
  }
}

/**
 * Debounce and Throttle Utilities
 */
export function debounce(func, wait, immediate = false) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Virtual Scrolling for Large Lists
 */
export class VirtualScroller {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      itemHeight: 100,
      buffer: 5,
      ...options
    };
    
    this.items = [];
    this.visibleItems = [];
    this.scrollTop = 0;
    this.containerHeight = 0;
    
    this.init();
  }
  
  init() {
    this.container.style.overflow = 'auto';
    this.container.style.position = 'relative';
    
    this.viewport = document.createElement('div');
    this.viewport.style.position = 'relative';
    this.container.appendChild(this.viewport);
    
    this.container.addEventListener('scroll', throttle(() => {
      this.handleScroll();
    }, 16));
    
    this.updateContainerHeight();
  }
  
  setItems(items) {
    this.items = items;
    this.updateVirtualHeight();
    this.render();
  }
  
  updateContainerHeight() {
    this.containerHeight = this.container.clientHeight;
  }
  
  updateVirtualHeight() {
    const totalHeight = this.items.length * this.options.itemHeight;
    this.viewport.style.height = `${totalHeight}px`;
  }
  
  handleScroll() {
    this.scrollTop = this.container.scrollTop;
    this.render();
  }
  
  render() {
    const startIndex = Math.max(0, Math.floor(this.scrollTop / this.options.itemHeight) - this.options.buffer);
    const endIndex = Math.min(
      this.items.length - 1,
      Math.ceil((this.scrollTop + this.containerHeight) / this.options.itemHeight) + this.options.buffer
    );
    
    this.visibleItems = this.items.slice(startIndex, endIndex + 1);
    
    // Clear viewport
    this.viewport.innerHTML = '';
    
    // Render visible items
    this.visibleItems.forEach((item, index) => {
      const actualIndex = startIndex + index;
      const element = this.renderItem(item, actualIndex);
      element.style.position = 'absolute';
      element.style.top = `${actualIndex * this.options.itemHeight}px`;
      element.style.height = `${this.options.itemHeight}px`;
      element.style.width = '100%';
      this.viewport.appendChild(element);
    });
  }
  
  renderItem(item, index) {
    // Override this method to customize item rendering
    const div = document.createElement('div');
    div.textContent = `Item ${index}: ${JSON.stringify(item)}`;
    div.className = 'virtual-item';
    return div;
  }
}

/**
 * Resource Preloader
 */
export class ResourcePreloader {
  constructor() {
    this.queue = [];
    this.loaded = new Set();
    this.loading = new Set();
  }
  
  preload(resources) {
    if (Array.isArray(resources)) {
      this.queue.push(...resources);
    } else {
      this.queue.push(resources);
    }
    
    return this.processQueue();
  }
  
  async processQueue() {
    const promises = this.queue.map(resource => this.loadResource(resource));
    return Promise.allSettled(promises);
  }
  
  async loadResource(resource) {
    if (this.loaded.has(resource.url) || this.loading.has(resource.url)) {
      return;
    }
    
    this.loading.add(resource.url);
    
    try {
      switch (resource.type) {
        case 'image':
          await this.loadImage(resource.url);
          break;
        case 'script':
          await this.loadScript(resource.url);
          break;
        case 'style':
          await this.loadStyle(resource.url);
          break;
        case 'font':
          await this.loadFont(resource.url, resource.family);
          break;
        default:
          await this.loadGeneric(resource.url);
      }
      
      this.loaded.add(resource.url);
    } catch (error) {
      console.error(`Failed to preload ${resource.type}: ${resource.url}`, error);
    } finally {
      this.loading.delete(resource.url);
    }
  }
  
  loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  }
  
  loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onload = resolve;
      script.onerror = reject;
      script.src = url;
      document.head.appendChild(script);
    });
  }
  
  loadStyle(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.onload = resolve;
      link.onerror = reject;
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    });
  }
  
  loadFont(url, family) {
    return new Promise((resolve, reject) => {
      const font = new FontFace(family, `url(${url})`);
      font.load().then(() => {
        document.fonts.add(font);
        resolve();
      }).catch(reject);
    });
  }
  
  loadGeneric(url) {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    });
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

// Export singleton instance
export { performanceMonitor };