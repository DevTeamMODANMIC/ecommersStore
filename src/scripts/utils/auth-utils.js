(function(){
  const USERS_KEY = 'modernstore_users';
  const CURRENT_USER_KEY = 'modernstore_user';

  function loadUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch(e){ return []; }
  }
  function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
  function getCurrentUser(){
    try { return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)); } catch(e){ return null; }
  }
  function setCurrentUser(user){ localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user)); }
  function logout(){ localStorage.removeItem(CURRENT_USER_KEY); }

  // naive hash to avoid plain text (client-side only, not secure)
  function hash(str){
    let h = 0; if (!str) return '0';
    for (let i=0;i<str.length;i++){ h = ((h<<5)-h) + str.charCodeAt(i); h|=0; }
    return h.toString(16);
  }

  function registerUser({name, email, password}){
    const users = loadUsers();
    email = (email||'').trim().toLowerCase();
    if (!name || !email || !password) throw new Error('All fields are required');
    if (users.find(u => u.email === email)) throw new Error('An account with this email already exists');
    const user = { id: 'u_'+Date.now(), name: name.trim(), email, passwordHash: hash(password), createdAt: Date.now() };
    users.push(user); saveUsers(users); setCurrentUser({ id: user.id, name: user.name, email: user.email, createdAt: user.createdAt });
    return user;
  }

  function loginUser(email, password){
    const users = loadUsers();
    email = (email||'').trim().toLowerCase();
    const user = users.find(u => u.email === email);
    if (!user) throw new Error('Invalid email or password');
    if (user.passwordHash !== hash(password)) throw new Error('Invalid email or password');
    setCurrentUser({ id: user.id, name: user.name, email: user.email, createdAt: user.createdAt });
    return user;
  }

  window.Auth = { loadUsers, saveUsers, getCurrentUser, setCurrentUser, logout, registerUser, loginUser };
})();