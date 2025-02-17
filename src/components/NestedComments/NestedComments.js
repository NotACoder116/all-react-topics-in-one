import React from "react";
import RenderComments from "./RenderComments";

const data = [
  {
    username: "Yadwinder",
    comment: "Woww! Very nice pic",
    profileImg: "https://styles.redditmedia.com/t5_2x26z/styles/communityIcon_q3l48371d5td1.png",
    reply: [
      {
        username: "Rajwinder",
        comment: "Hey! Nice comment",
        profileImg: "https://styles.redditmedia.com/t5_2x26z/styles/communityIcon_q3l48371d5td1.png",
        reply: [
            {
                username: "Yadi",
                comment: "Haha, Very funny!",
                profileImg: "https://styles.redditmedia.com/t5_2x26z/styles/communityIcon_q3l48371d5td1.png",
            }
        ]
      },
    ],
  },
  {
    username: "Rahul",
    comment: "Woww! Very nice",
    profileImg: "https://styles.redditmedia.com/t5_2x26z/styles/communityIcon_q3l48371d5td1.png",
  },
];

const NestedComments = () => {
  return (
    <div>
        <RenderComments users={data} />
    </div>
  );
};

export default NestedComments;
