import { useSelector } from "react-redux";

import { selectUser } from "../../store/user";

const UserPage = () => {
  const userInfo = useSelector(selectUser);
  console.log("userInfo", userInfo);
  return (
    <>
      <h1>User PAGE</h1>
      <table>
        <tr>
          <td>USER</td>
          <td>{userInfo.email}</td>
        </tr>
        <tr>
          <td>REGISTRED</td>
          <td>{userInfo.createdAt}</td>
        </tr>
        <tr>
          <td>LAST SEEN</td>
          <td>{userInfo.lastLoginAt}</td>
        </tr>
      </table>
    </>
  );
};

export default UserPage;
