function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('currProject')
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}