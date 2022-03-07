import Link from "next/link";

const PageUrlNotFound = () => {
  return (
    <>
      <h1> Oooppsss... this page doesnt exist</h1>
      <p>
        {" "}
        Go back to the{" "}
        <Link href={"/"}>
          <a>Homepage</a>
        </Link>
      </p>
    </>
  );
};

export default PageUrlNotFound;
