export default function NotFound() {
  return (
    <>
      <div className="bodySection page-titleBar">
        <h1 className="title">Error</h1>
      </div>
      <div className={`page-content bodySection`}>
        <p>Page not found</p>
      </div>
    </>
  );
}

export async function generateMetadata() {
  return {
    title: "Error",
    description: "Error"
  };
}
