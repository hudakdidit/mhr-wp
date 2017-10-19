const activeClassname = 'active';
const getCurrentPath = pathname => {
    const pathParts = pathname.split('/');
    if (pathParts.length > 1) {
        return pathParts[pathParts.length - 2];
    }
    return '';
}
export default {
    init() {
        this.navItems = Array.from(document.querySelectorAll('.primary-nav a, #restaurant-menus a')).filter(a => a.getAttribute('href') !== '#');
    },

    setActiveNavItem() {
        this.init();
        
        //reset
        this.navItems.forEach(item => item.classList.remove(activeClassname));

        const currentPath = getCurrentPath(location.pathname);
        
        // get current url path
        this.navItems.forEach(item => {
            if (getCurrentPath(item.getAttribute('href')) === currentPath) {
                item.classList.add('active');
            }
        });
    }
}