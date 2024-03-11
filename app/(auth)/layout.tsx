const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen items-center justify-center w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">{children}</div>;
};

export default layout;
