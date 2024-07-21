const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="rounded-xl bg-primary p-2 px-4 font-serif text-xs font-bold tracking-tight text-primary-foreground">
        An innovative platform for image generation.
      </h2>
      <h1 className="text-center font-serif text-3xl font-bold text-primary">
        Unreal Vision - Art Beyond Reality
      </h1>
      <p className="max-w-[500px] text-center text-lg italic text-muted-foreground max-sm:max-w-[400px] max-sm:px-2 max-sm:text-base">
        It&apos;s a work in progress and will be updated with more features and
        content soon.
      </p>
    </div>
  );
};

export default HomePage;
