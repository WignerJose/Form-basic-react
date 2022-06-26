import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({submit})=>{
    const [formulario, handleChange, reset] = useFormulario({ name: '', lastName: '', email: '' })

    const handleSubmit=(e)=>{
    e.preventDefault()
    submit(formulario)
    reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
              label='Nombre del usuario'
              name='name'
              value={formulario.name}
              onChange={handleChange}
              placeholder='Nombre'
            />
            <Input
              label='Apellido del usuario'
              name='lastName'
              value={formulario.lastName}
              onChange={handleChange}
              placeholder='apellido'
            />
            <Input
              label='Correo electronico'
              name='email'
              value={formulario.email}
              onChange={handleChange}
              placeholder='email'
            />

            <Button>Enviar</Button>
          </form>
    )
}

export default UserForm