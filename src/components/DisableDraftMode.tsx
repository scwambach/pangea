import Link from "next/link";

export const DisableDraftMode = () => {
  return (
    <Link
      className="fixed text-xs button py-3 px-5 secondary shadow-lg bottom-10 left-10 z-[999]"
      href="/api/draft-mode/disable"
    >
      Disable Draft Mode
    </Link>
  );
};
