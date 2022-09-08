import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className=''>
      <Link href="/auth/login" passHref>
        <button className="min-w-[150px] md:w-[200px] rounded-full hover:cursor-pointer text-white bg-accent px-6 py-3">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default CTA;
