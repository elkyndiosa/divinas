import Swal from 'sweetalert2'
//import Messages from './Messages'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

class NotificationHandler  {
  
    simpleSuccess(msj) {
      Toast.fire({
        icon: 'success',
        title: msj,
      })
    }

    simpleError(msj) {
      Toast.fire({
        icon: 'error',
        title: msj,
      })
    }

    successAlert(title, msj) {
      Swal.fire({
        icon: 'success',
        title: title,
        text: msj,
        focusCancel: true,
        confirmButtonColor:'#FFEB3B'
      })
    }

    errorAlert(title, msj) {
      Swal.fire({
        icon: 'error',
        title: title,
        text: msj,
        focusCancel: true,
        confirmButtonColor:'#FFEB3B'
      })
    }

    sesionExpire(msj) {
      Swal.fire({
        icon: 'info',
        title: msj,
        showConfirmButton: false,
      })
    }

    async confirm(msj) {
      let r = await Swal.fire({
        title: msj,
        icon: 'question',
        showCancelButton: true,
        focusCancel: true,
        confirmButtonColor:'#FFEB3B',
        reverseButtons: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      })

      if(r.value)
        return true

      return false
    }
 }

export default new NotificationHandler;