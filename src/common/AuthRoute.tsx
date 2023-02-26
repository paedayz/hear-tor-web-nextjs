// import React from "react";
// import { Route } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { userRoleState } from "../recoil/atoms/userAtom";

// type Props = {
//   Component: React.ComponentType<any>;
//   path: string;
//   exact: boolean;
// };

// const AuthRoute = ({ Component, path, exact }: Props) => {
//   // Recoil
//   const [role, setRole] = useRecoilState(userRoleState);

//   return <Route exact path={path} render={(props) => {
//       if(role === 'admin'){
//         return <Component {...props} />
//       }
//       else {
//         window.location.href = '/'
//       }
//   }} />;
// };

// export default AuthRoute;
