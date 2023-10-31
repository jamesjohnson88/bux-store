import React from "react";

function LockingPopup() {
    return (
        <div className="bg-black bg-opacity-50 absolute w-full h-full flex items-start justify-center">
            <div className="bg-white max-w-2xl m-40 p-4 rounded-lg text-center text-black relative z-10">
                <h2 className="text-2xl font-bold mb-2">Whoops!</h2>
                <p>Looks like somebody is out of BuxCoin... you&apos;re going to need to 'mine' some more to continue!</p>
            </div>
        </div>
    );
}

export default LockingPopup;