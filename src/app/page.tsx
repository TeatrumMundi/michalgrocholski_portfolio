import MediaButton from "@/components/MediaButton";

function HomePage()
{
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center justify-between p-24">
      <MediaButton
        label="GitHub"
        iconUrl="/icons/github.svg"
        url="https://github.com/TeatrumMundi"
      />
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Explore my projects and skills.</p>
    </div>
  );
}

export default HomePage;