import {Button, Drawer} from "@heroui/react";

export function DrawerPart() {
  const placements = ["top"];

  return (
    <div className="flex flex-wrap gap-4 ">
      {placements.map((placement) => (
        <Drawer className={`pt-10`} key={placement}>
          
             <Button className=" btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
               
              >
                {" "}
                <path
                className=" h-10 w-10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />{" "}
              </svg>
            </Button>
         
          <Drawer.Backdrop>
            <Drawer.Content placement={placement}>
              <Drawer.Dialog>
                {/* <Drawer.CloseTrigger /> */}
               
                <Drawer.Header>
                  <Drawer.Heading>
                    {/* {placement.charAt(0).toUpperCase() + placement.slice(1)}  */}
                  </Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <p className="text-center w-full mb-4 ">
                   <input className="border text-[18px] px-2 md:text-2xl rounded-xl w-full  md:w-[40%] py-2" type="search" placeholder="Search Items"></input>
                  </p>
                  
                  <p className="text-center">
                     <button className="btn px-10 text-[1rem] md:px-4 py-1 md:text-xl md:font-bold">
                           Search
                     </button>
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  
                </Drawer.Footer>
                {placement === "top" && <Drawer.Handle />}
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      ))}
    </div>
  );
}