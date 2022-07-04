import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className=''>
      <Link href="/auth/login" passHref>
        <button className="w-[200px] rounded-md hover:cursor-pointer text-white bg-accent px-8 py-4">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default CTA;
