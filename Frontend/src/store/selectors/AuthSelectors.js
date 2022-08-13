export const isAuthenticated = (state) => {
    if (state.auth.auth.email) return true;
    return false;
};
