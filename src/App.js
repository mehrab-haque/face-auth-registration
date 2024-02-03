import React, { useState } from 'react'
import { Dialog, DialogContent } from "@mui/material";
import { Toaster } from 'react-hot-toast';
import { BarLoader} from "react-spinners";
import Auth from './components/Auth';

let setLoading

function App() {

    const [loading, setL] = useState(false)
    setLoading = setL

    return (
        <div>
            <Dialog PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }} open={loading}>
                <DialogContent>
                    <BarLoader
                        color={'#ffffff'}
                        loading={true}

                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />

                </DialogContent>
            </Dialog>

            <Toaster />

            <Auth/>

        </div>);
}

export default App;
export { setLoading}