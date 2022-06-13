import Spacer from "./Spacer";

const NavBar = () => {
    return (
        <div className="bg-teal-500 py-5 px-4 mb-5">
            <ul className="flex flex-row space-x-3">
                <li className="text-zinc-800"> Pkazo </li>
                <li className="hover:text-slate-50"> Home </li>
                <li className="hover:text-slate-50"> About </li>
                <li className="hover:text-slate-50"> Shop </li>
                <li className="hover:text-slate-50"> Flash Sale </li>
                <Spacer />
                <li className="text-white">
                    Connect Wallet
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
