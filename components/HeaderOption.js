function HeaderOption({ Icon, title, selected }) {
  return (
    <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-orange-500 hover:border-orange-500 pb-3 cursor:pointer ${
        selected && 'text-orange-500 border-orange-500'
        }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
