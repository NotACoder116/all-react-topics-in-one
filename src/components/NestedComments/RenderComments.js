import React from "react";

const RenderComments = ({ users }) => {
  if (!users.length) return null;

  return (
    <div className="flex pl-10 flex-col">
      {users.map((eachData) => {
        return (
          <div className="ltr border-s-2 border-black-200">
            <div>
              {/* <img src={eachData.profileImg} alt="Reddit Profile Image" /> */}
              <h6>{eachData.username}</h6>
            </div>
            <p>{eachData.comment}</p>
            {eachData.reply && (
              <RenderComments key={eachData.username} users={eachData.reply} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RenderComments;
