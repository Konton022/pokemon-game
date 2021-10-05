import { useSelector } from "react-redux";

import { selectUser } from "../../store/user";

const UserPage = () => {
  const userInfo = useSelector(selectUser);
  console.log("userInfo", userInfo);
  return (
    <>
      <h1>User PAGE</h1>
      <div>
        {Object.keys(userInfo).map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <span>{userInfo[item]}</span>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default UserPage;
