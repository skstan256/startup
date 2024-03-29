function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userData');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}