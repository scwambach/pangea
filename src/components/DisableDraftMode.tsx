/* eslint-disable @next/next/no-html-link-for-pages */

export const DisableDraftMode = () => {
  return (
    <a
      className="fixed text-xs button py-3 px-5 secondary shadow-lg bottom-10 left-10 z-[999]"
      href="/api/draft-mode/disable"
    >
      Disable Draft Mode
    </a>
  );
};
