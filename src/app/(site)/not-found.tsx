export const metadata = {
  title: "404 - Not Found",
  description: "Page not found.",
};

export default async function FourOhFour() {
  return (
    <>
      <h1 className="text-center px-4 text-6xl tablet-md:text-8xl py-52 tablet-md:py-80">
        404 Not Found
      </h1>
    </>
  );
}
