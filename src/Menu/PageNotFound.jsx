const PageNotFound = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <a href="/" class="text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
};
export default PageNotFound;
