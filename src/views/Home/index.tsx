import TextField from '@mui/material/TextField';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div>
        <h1>Generar PDF</h1>
        <form action="https://eyder2.pythonanywhere.com/generar" method="post" className={styles.form}>
            <TextField label="Nombre" variant="outlined" name={"nombre"}/>

            <TextField  type="date" variant="outlined" name={"fecha"}/>

            <TextField
              label="Descrippción"
              multiline
              rows={4}
              name={"descripcion"}
            />

            <button type="submit">Generar PDF</button>
        </form>
    </div>
  );
};

export default Home;