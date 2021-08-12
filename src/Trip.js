import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


export default function Trip() {
    
    return(
        <div className="layout">
            <div className="trip">
                    

                <InputLabel htmlFor="age-native-simple">Pick up location</InputLabel>
        <Select
          native
          value={'state.age'}
          onChange={'handleChange'}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          
          <option aria-label="Train station rigasa Kaduna state" value={0}>Train station rigasa Kaduna state</option>
        </Select>
                    <br />
                    <TextField className="last-name" required  label="Destination" variant="outlined" />
                
                <br />
                <br />
                <TextField required fullWidth type="number" label="Phone" variant="outlined" />
                <br />
                <TextField required label="Outlined" variant="outlined" />
                <div className="btn-signup">
                    <Button variant="outlined">schedule for later</Button>
                    <Button id="signup" variant="contained">Request now</Button>
                </div>
            </div>
                
            
        </div>
    )
}