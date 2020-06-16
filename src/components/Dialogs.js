import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export function DeleteCard({confirmDelete, open, setOpen}) {
    return (
        <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Excluir cargo?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Tem certeza que deseja excluir esse cargo permanentemente?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
                Não
            </Button>
            <Button onClick={confirmDelete} color="primary" autoFocus>
                Sim
            </Button>
            </DialogActions>
        </Dialog>
    )
}


export function DeleteCardError({open, setOpen}) {
    return (
        <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Impossível excluir cargo"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Impossível excluir um cargo com funcionários pertencentes, por favor retire os funcionários e tente novamente.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
                OK
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export function AddCard({open, setOpen, confirmAdd}) {
    const [title,setTitle] = React.useState("")

    return (
        <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Adicionar Cargo"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Insira o nome do cargo. Este nome pode ser alterado mais tarde.
            </DialogContentText>
            <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nome do Cargo"
                  type="text"
                  fullWidth
                  value={title}
                  onChange={e=>setTitle(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
                Cancelar
            </Button>
            <Button onClick={()=> confirmAdd(title)} color="primary" autoFocus>
                OK
            </Button>
            </DialogActions>
        </Dialog>
    )
}
