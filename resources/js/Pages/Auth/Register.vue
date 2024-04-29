<template>
    <Head>
        <title>{{ appName }} - Register</title>
    </Head>
    <div class="authentication-reset-password d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12 col-lg-6 mx-auto">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-lg-12 border-end">
                            <div class="card-body">
                                <div class="form-body">
                                    <form @submit.prevent="submit" class="row g-3">
                                        <div class="p-6">
                                            <center>
                                                <img v-bind:src="'/assets/images/logo-plain.png'" :style="{ width: '10%'}" />
                                                <h4 class="mt-2 font-weight-bold">Registrasi</h4>
                                                <p>Sudah memiliki akun ? <Link href="/login">Login disini</Link></p>
                                            </center>

                                            <div class="row">
                                                <div class="col-12">
                                                    <label class="form-label">Nama Lengkap</label>
                                                    <input type="text" v-model="form.name" :class="{ 'is-invalid': errors.name }" class="form-control" placeholder="Nama Lengkap">
                                                    <div v-if="errors.name" class="invalid-feedback">
                                                        {{ errors.name }}
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Jenis Kelamin</label>
                                                    <select v-model="form.gender" :class="{ 'is-invalid': errors.gender }" class="form-select">
                                                        <option value="">[ Pilih Jenis Kelamin ]</option>
                                                        <option value="M">Laki-laki</option>
                                                        <option value="F">Perempuan</option>
                                                    </select>
                                                    <div v-if="errors.gender" class="invalid-feedback">
                                                        {{ errors.gender }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Nomor Hp (Pastikan WA Aktif)</label>
                                                    <input type="text" v-model="form.phone_number" :class="{ 'is-invalid': errors.phone_number }" class="form-control" placeholder="Nomor Hp (WA Aktif)">
                                                    <div v-if="errors.phone_number" class="invalid-feedback">
                                                        {{ errors.phone_number }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" v-model="form.email" :class="{ 'is-invalid': errors.email }" class="form-control" placeholder="Email">
                                                    <div v-if="errors.email" class="invalid-feedback">
                                                        {{ errors.email }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Provinsi</label>
                                                    <select  @change="cityData" v-model="form.province_id" :class="{ 'is-invalid': errors.province_id }" class="form-select">
                                                        <option value="">[ Pilih Provinsi ]</option>
                                                        <option v-for="province in provinces" :value="province.id">
                                                            {{ province.name }}
                                                        </option>
                                                    </select>
                                                    <div v-if="errors.province_id" class="invalid-feedback">
                                                        {{ errors.province_id }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Kota / Kab</label>
                                                    <select @change="districtData" v-model="form.city_id" :class="{ 'is-invalid': errors.city_id }" class="form-select">
                                                        <option value="">[ Pilih Kota / Kab]</option>
                                                        <option v-for="city in form.cities" :value="city.id">
                                                        {{ city.name }}
                                                        </option>
                                                    </select>

                                                    <div v-if="errors.city_id" class="invalid-feedback">
                                                        {{ errors.city_id }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Kecamatan</label>
                                                    <select @change="villageData" v-model="form.district_id" :class="{ 'is-invalid': errors.district_id }" class="form-select">
                                                        <option value="">[ Pilih Kecamatan ]</option>
                                                        <option v-for="district in form.districts" :value="district.id">
                                                        {{ district.name }}
                                                        </option>
                                                    </select>
                                                    <div v-if="errors.district_id" class="invalid-feedback">
                                                        {{ errors.district_id }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Desa / Kelurahan</label>
                                                    <select v-model="form.village_id" :class="{ 'is-invalid': errors.village_id }" class="form-select">
                                                        <option value="">[ Pilih Desa / Kelurahan ]</option>
                                                        <option v-for="village in form.villages" :value="village.id">
                                                        {{ village.name }}
                                                        </option>
                                                    </select>
                                                    <div v-if="errors.village_id" class="invalid-feedback">
                                                        {{ errors.village_id }}
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Alamat</label>
                                                    <textarea cols="30" rows="2" v-model="form.address" :class="{ 'is-invalid': errors.address }" class="form-control" placeholder="Alamat RT/RW/No Rumah"></textarea>
                                                    <div v-if="errors.address" class="invalid-feedback">
                                                        {{ errors.address }}
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <label class="form-label">Password</label>
                                                    <input type="password" v-model="form.password" :class="{ 'is-invalid': errors.password }" class="form-control" placeholder="Password">
                                                    <div v-if="errors.password" class="invalid-feedback">
                                                        {{ errors.password }}
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <label class="form-label">Konfirmasi Password</label>
                                                    <input type="password" v-model="form.password_confirmation" :class="{ 'is-invalid': errors.password_confirmation }" class="form-control" placeholder="Konfirmasi Password">
                                                    <div v-if="errors.password_confirmation" class="invalid-feedback">
                                                        {{ errors.password_confirmation }}
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <br>
                                                    <div class="d-grid">
                                                        <button type="submit" class="btn btn-primary" :style="{ 'background-color': '#0d6efd', 'border-color': '#0d6efd'}"><i class='bx bx-user'></i>Registrasi</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.8)!important;
}
</style>
<script>
    //import layout
    import LayoutAuth from '../../Layouts/Auth.vue';

    // import Head form Inertia
    import { Head } from '@inertiajs/inertia-vue3';

    //import reactive
    import { reactive } from 'vue';

    // import link
    import { Link } from '@inertiajs/inertia-vue3';

    //import inertia adapter
    import { Inertia } from '@inertiajs/inertia';

    //import axios
    import axios from 'axios';

    export default {
        // layout
        layout: LayoutAuth,

        components: {
            Head,
            Link
        },
        data() {
            return {
                cities: []
            }
        },

        //props
        props: {
            errors: Object,
            session: Object,
            cities: Object,
        },
        mounted() {
            // get all provinces data
            axios.get('region/province').then(response => {
                this.provinces = response.data;
            }).catch(error => console.error(error));
        },

        setup(props) {
            const form = reactive({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                province_id: '',
                city_id: '',
                district_id: '',
                village_id: '',
                address: '',
                phone_number: '',
                gender: '',
                // get from api
                cities: [],
                districts: [],
                villages: [],
            });

            const cityData = () => {
                form.city_id = '';
                form.district_id = '';
                form.village_id = '';
                axios.get(`/region/city/${form.province_id}`).then(response => {
                form.cities = response.data;
                }).catch(error => console.error(error));
            }

            const districtData = () => {
                form.district_id = '';
                form.village_id = '';
                axios.get(`/region/district/${form.city_id}`).then(response => {
                form.districts = response.data;
                }).catch(error => console.error(error));
            }

            const villageData = () => {
                form.village_id = '';
                axios.get(`/region/village/${form.district_id}`).then(response => {
                form.villages = response.data;
                }).catch(error => console.error(error));
            }

            // submit method
            const submit = () => {
                // send data to server
                Inertia.post('/register', {
                    // data
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    password_confirmation: form.password_confirmation,
                    province_id: form.province_id,
                    city_id: form.city_id,
                    district_id: form.district_id,
                    village_id: form.village_id,
                    address: form.address,
                    phone_number: form.phone_number,
                    gender: form.gender,
                });
            }

            // return form state and submit method
            return {
                form,
                submit,
                cityData,
                districtData,
                villageData
            }
        }
    }
</script>