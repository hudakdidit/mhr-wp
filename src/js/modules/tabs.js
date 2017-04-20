export default class Tabs {
  constructor(eventType) {
    this.activeTab = undefined;
    this.initTabs(eventType);
  }
  initTabs() {
    const $tabGroups = $('.tabs-group');
    if (!$tabGroups.length) {
      return;
    }
    // console.log(typeof tabGroups, tabGroups);
    $tabGroups.each((i, tg) => {
      this.$tabHeaders = $(tg).find('.tabs-header a');
      this.$tabSections = $(tg).find('.tabs-content');
      this.$tabHeaders.each((index, header) => {
        $(header).on('click', (e) => {
          e.preventDefault();
          this.setActiveTab(index);
        });
      });
    });
    const activeTab = window.location.search ? window.location.search.split('=').pop() : 0;
    this.setActiveTab(activeTab);
  }

  resetTabs() {
    this.$tabHeaders.each((i, th) => $(th).removeClass('active'));
    this.$tabSections.each((i, ts) => $(ts).removeClass('active'));
  }

  setActiveTab(index = 0) {
    const { history } = window;
    if (index !== this.activeTab) {
      this.resetTabs();
      this.$tabHeaders.eq(index).addClass('active');
      this.$tabSections.eq(index).addClass('active');
      history.pushState(null, null,
        `${document.location.origin}${document.location.pathname}?activeTab=${index}`);
    }
  }
}
