import {Button, Drawer} from "@heroui/react";

export function Placements() {
  const placements = ["top"];

  return (
    <div className="flex flex-wrap gap-4 ">
      {placements.map((placement) => (
        <Drawer className={`pt-10`} key={placement}>
          <Button variant="secondary">
            {placement.charAt(0).toUpperCase() + placement.slice(1)}
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement={placement}>
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
               
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