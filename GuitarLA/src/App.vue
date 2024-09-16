<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { db } from './data/guitarras'
import GuitarraComp from './components/GuitarraComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

// Añadiendo datos al state con ref
const guitarras = ref([])
const carrito = ref([])
const guitarra = ref({})

// Persistencia de datos con watch
watch(carrito, () => {
  guardarLocalStorage()
}, {
  deep: true
})

// Ciclo de vida
onMounted(() => {
  guitarras.value = db
  guitarra.value = db[3]
  const carritoStorage = localStorage.getItem("carrito")
  if (carritoStorage) {
    carrito.value = JSON.parse(carritoStorage)
  }
})

// Persistencia con LocalStorage
const guardarLocalStorage = () => {
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

// Verificar existencia y actualizar cantidad
const agregarCarrito = (guitarra) => {
  const existeCarrito = carrito.value.findIndex(producto => producto.id === guitarra.id)

  if (existeCarrito >= 0) {
    // Si el producto ya existe, verifica si la cantidad es menor a 5
    if (carrito.value[existeCarrito].cantidad < 5) {
      carrito.value[existeCarrito].cantidad++
    } else {
      return // Evita agregar más de 5 unidades
    }
  } else {
    // Si no existe en el carrito, lo agrega con cantidad 1
    guitarra.cantidad = 1
    carrito.value.push(guitarra)
  }
}


// Disminuir cantidades
const decrementarCantidad = (id) => {
  const index = carrito.value.findIndex(producto => producto.id === id)
  if (carrito.value[index].cantidad <= 1) return
  carrito.value[index].cantidad--
}

// Aumentar cantidades
const incrementarCantidad = (id) => {
  const index = carrito.value.findIndex(producto => producto.id === id)
  if (carrito.value[index].cantidad >= 5) return
  carrito.value[index].cantidad++
}

// Eliminar todo el producto del carrito
const eliminarProducto = (id) => {
  carrito.value = carrito.value.filter(producto => producto.id !== id)
}

// Limpiar carrito
const limpiarCarrito = () => {
  carrito.value = []
}

</script>

<template>
  <HeaderComp :carrito="carrito" :guitarra="guitarra" @decrementar-cantidad="decrementarCantidad"
    @incrementar-cantidad="incrementarCantidad" @agregar-carrito="agregarCarrito" @eliminar-producto="eliminarProducto"
    @limpiar-carrito="limpiarCarrito" />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>

    <div class="row mt-5">
      <GuitarraComp v-for="guitarra in guitarras" :guitarra="guitarra" @agregar-carrito="agregarCarrito" />
    </div>
  </main>

  <FooterComp />
</template>

<style scoped></style>

<!-- Escribe los pasos que llevo hecho -->