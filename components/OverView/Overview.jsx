const Overview = () => {

    return <div className="flex justify-between py-4 items-center">
        <div className=" text-2xl font-semibold">


            Overview

        </div>
        <div className="flex items-center gap-2 border-2 border-solid rounded-md py-1 px-2">
            <div>
                This Month
            </div>
            <div>
                <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330" xml:space="preserve">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                </svg>
            </div>
        </div>
    </div>
}
export {
    Overview
}