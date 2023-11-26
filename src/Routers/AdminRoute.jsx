const AdminRoute = ({ children }) => {
  const isAdmin = true;
  if (isAdmin) {
    return children;
  }
  return <div></div>;
};

export default AdminRoute;
