<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-mail';
import { store } from '../../data/store';
import FormAlert from '../forms/FormAlert.vue';
const defaultForm = {
    email: '',
    subject: '',
    content: '',
}
export default {
    name: "ContactUsPage",
    components: {
        FormAlert,
    },
    data: () => ({
        form: defaultForm,
        successMessage: null,
        errors: {},
        isPristine: true,
    }),
    computed: {
        hasErrors() {
            //? Object.keys(this.errors).length Restituisce un array con le chiavi di quello che mettiamo tra parentesi
            return Object.keys(this.errors).length;
        },
        showAlert() {
            // Controllo se abbiamo un messaggio di successo o se l'oggetto errors ha delle chiavi, la risposta la trasformo in booleano
            return Boolean(this.successMessage || this.hasErrors);
        },
        alertType() {
            return this.hasErrors ? 'danger' : 'success';
        }
    },
    methods: {
        validateField(field) {
            //Controlla se il form è stato inviato(se è "immacolato")
            if (this.isPristine) return '';
            // Se non è toccato prendi gli errori e invia il field giusto
            return this.errors[field] ? 'is-invalid' : 'is-valid';
        },
        // Validazione Front
        validateForm() {
            //Parto con errors vuoto e mano mano aggiungo gli errori
            this.errors = {};
            this.successMessage = null;
            // Validazione email
            if (!this.form.email) {
                this.errors.email = 'Nessun email inserita';
            } else if (!this.form.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                this.errors.email = 'Mail non valida';
            }
            //Validazione oggetto
            if (!this.form.subject) this.errors.subject = 'Campo oggetto vuoto, non valido';
            //Validazione contenuto
            if (!this.form.content) this.errors.content = 'Conenuto Mail vuoto, non valido';
        },
        async sendForm() {
            // Flag per form già usato
            this.isPristine = false;
            // Faccio la Validazione
            this.validateForm();
            // Se c'è un errore esci
            if (this.hasErrors) return
            store.isLoading = true;
            try {
                await axios.post(endpoint, this.form);
                this.isPristine = true;
                this.form = { ...defaultForm };
                this.successMessage = 'Il tuo messaggio è stato inviato correttamente!';
            } catch (err) {
                console.error(err);
                // Se lo status dell'errore è 422
                if (err.response.status === 422) {
                    // Tiro fuori l'oggetto errors 
                    const { errors } = err.response.data;
                    // Prendo i miei errori e lo riassegno con spread
                    this.errors = { ...errors };
                } else {
                    // Altrimenti mostro l'errore generico
                    this.errors = { network: "C'è stato un errore" };
                }
            }
            store.isLoading = false;
        }
    }
};
</script>

<template>
    <h1 class="my-5">Contattaci</h1>

    <!-- Form Alert -->
    <FormAlert :isOpen="showAlert" :type="alertType" :dismissible="!hasErrors">
        <div v-if="successMessage">{{ successMessage }}</div>
        <ul v-if="hasErrors">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </FormAlert>

    <!-- Form Contatti -->
    <form @submit.prevent="sendForm">

        <!-- Email -->
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email <sup class="text-danger">*</sup></label>
            <input type="email" class="form-control" :class="validateField('email')" id="email"
                placeholder="pippo@ciao.com" v-model.trim="form.email" required>
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            <small v-else class="form-text text-muted">La tua email, ti contatteremo a questo indirizzo</small>
        </div>

        <!-- Oggetto -->
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto<sup class="text-danger">*</sup></label>
            <input type="text" class="form-control" :class="validateField('subject')" id="subject"
                v-model.trim="form.subject" required>
            <div v-if="errors.subject" class="invalid-feedback">{{ errors.email }}</div>
        </div>

        <!-- Contenuto -->
        <div class="mb-3">
            <label for="content" class="form-label">Contenuto<sup class="text-danger">*</sup></label>
            <textarea class="form-control" :class="validateField('content')" id="content" rows="5"
                v-model.trim="form.content"></textarea>
            <div v-if="errors.content" class="invalid-feedback">{{ errors.content }}</div>
        </div>

        <!-- Invia -->
        <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Invia</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>