export default function () {
  return (
    <div className="container flex  items-center w-full justify-between py-4">
      <div className="flex gap-2 items-end">
        <span className="font-bold text-4xl">FAQ</span>
        <span className="text-xl">For Everything</span>
      </div>
      <ul className="flex items-center gap-6">
        <li className="text-xl">Write</li>
        <li className="text-xl">Login</li>
        <li>
          <button className="btn btn-primary btn-base">Sign Up</button>
        </li>
      </ul>
    </div>
  );
}
