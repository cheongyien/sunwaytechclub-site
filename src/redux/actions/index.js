export const selectPage = (store, selectedPage) => {
  const page = selectedPage;
  store.setState({ page });
};

export const toggleDrawer = (store, payload) => {
  const drawerVisible = payload;
  store.setState({ drawerVisible })
}