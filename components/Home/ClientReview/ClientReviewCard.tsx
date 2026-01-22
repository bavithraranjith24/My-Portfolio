import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  role: string;
  image: string;
};

const ClientReviewCard = ({ name, role, image }: Props) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; fdgsdfghs fdhgsd fgjdafkjahds fiuhadu fhadskjfiuas dhfiua
        dshfkjasdhfiua ydfiuhfd jhaduifh ads7u &quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
