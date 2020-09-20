<template>
    <v-row justify="center">
        <v-col cols="12">
            <h1 class="h1">
                Editar Publicacion
            </h1>
        </v-col>
        <v-col cols="12">
            <v-stepper v-model="step">
                <v-stepper-header elevation="0">
                    <v-stepper-step
                        :complete="valid_step_1"
                        step="1"
                        editable
                    >
                        Datos Personales
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="valid_step_2"
                        step="2"
                        :editable="valid_step_1"

                    >
                        Servicios y Horarios
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="valid_step_3"
                        step="3"
                        :editable="valid_step_1 && valid_step_2"
                    >
                        Imagenes
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        :complete="valid_step_4"
                        step="4"
                        :editable="valid_step_1 && valid_step_2 && valid_step_3"
                    >
                        Videos
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-form v-model="valid_step_1">
                            <v-card flat>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="publication.name"
                                                label="Nombre"
                                                :rules="rules"
                                                outlined
                                                dense
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="publication.nikc"
                                                label="Alias"
                                                :rules="rules"
                                                outlined
                                                dense
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-row justify="center">
                                                <v-col cols="4" class="py-0">
                                                    <v-text-field
                                                        v-model="publication.years"
                                                        label="Edad"
                                                        type="number"
                                                        :rules="rules"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="4" class="py-0">
                                                    <v-text-field
                                                        v-model="publication.weight"
                                                        label="Peso"
                                                        type="number"
                                                        :rules="rules"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="4" class="py-0">
                                                    <v-text-field
                                                        v-model="publication.height"
                                                        label="Estatura"
                                                        type="number"
                                                        :rules="rules"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="publication.email"
                                                label="Correo electronico"
                                                outlined
                                                dense
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="publication.phone"
                                                label="telefono"
                                                :rules="rules"
                                                outlined
                                                dense
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                                v-model="publication.whatsapp"
                                                label="Whatsapp"
                                                :rules="rules"
                                                outlined
                                                dense
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="6" sm="6" md="4">
                                            <v-select
                                                :items="cities.list"
                                                item-text="name"
                                                item-value="id"
                                                v-model="publication.city_id"
                                                label="Ciudad"
                                                :readonly="cities.busy"
                                                :loading="cities.busy"
                                                :rules="rules"
                                                outlined
                                                dense
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="6" sm="6" md="4">
                                            <v-select
                                                :items="barrios"
                                                item-text="name"
                                                item-value="id"
                                                v-model="publication.barrio_id"
                                                :readonly="cities.busy"
                                                :loading="cities.busy"
                                                :rules="rules"
                                                label="Barrio"
                                                outlined
                                                dense
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="4" class="text-h6 font-weight-bold">
                                            <v-row justify="center">
                                                <v-col cols="6" class="p-0">
                                                    <v-checkbox
                                                        v-model="publication.delivery"
                                                        label="Realiza Domicilios"
                                                        class="my-0"
                                                        large
                                                        outlined
                                                        dense
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="6" class="p-0">
                                                    <v-checkbox
                                                        v-model="publication.have_site"
                                                        label="Tiene Sitios"
                                                        class="my-0"
                                                        large
                                                        outlined
                                                        dense
                                                    ></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        @click="step = 2"
                                        :disabled="!valid_step_1"
                                        depressed
                                    >
                                        Siguiente
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-form v-model="valid_step_2">
                            <v-card flat>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-card flat>
                                                <v-card-text>
                                                    <v-text-field
                                                        v-model="publication.price"
                                                        label="Precio por hora"
                                                        type="number"
                                                        :rules="rules"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                    <v-autocomplete
                                                        v-model="servicesSelect"
                                                        label="Servicios"
                                                        :items="services.list"
                                                        :loading="services.busy"
                                                        :readonly="services.busy"
                                                        item-value="id"
                                                        chips
                                                        multiple
                                                        outlined
                                                        large
                                                    >
                                                        <template v-slot:selection="data">
                                                            <v-chip
                                                            v-bind="data.attrs"
                                                            :input-value="data.selected"
                                                            close
                                                            @click:close="removeService(data.item.id)"
                                                            >{{ data.item.name }}</v-chip>
                                                        </template>
                                                        <template v-slot:item="data">
                                                            <template>
                                                            <v-list-item-content>
                                                                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                                            </v-list-item-content>
                                                            </template>
                                                        </template>
                                                    </v-autocomplete>
                                                    <v-textarea
                                                        v-model="publication.description"
                                                        label="Descripcion y Detalles"
                                                        :rules="rules"
                                                        outlined
                                                    ></v-textarea>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-card class="mt-4" outlined>
                                                <v-card-title>
                                                    Horario:
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-row>
                                                        <v-col cols="12" sm="6">
                                                            <v-select
                                                                v-model="dataAdd.input_day"
                                                                :items="days"
                                                                :rules="rules"
                                                                label="De"
                                                                outlined
                                                                dense
                                                            ></v-select>
                                                            <v-select
                                                                v-model="dataAdd.output_day"
                                                                :items="days"
                                                                :rules="rules"
                                                                label="A"
                                                                outlined
                                                                dense
                                                            ></v-select>
                                                            <v-checkbox
                                                                v-model="dataAdd.every_day"
                                                                class="text-h6 font-weight-bold"
                                                                label="Todos los dias"
                                                            ></v-checkbox>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-menu
                                                                ref="from_menu"
                                                                v-model="from_menu"
                                                                :close-on-content-click="false"
                                                                :return-value.sync="dataAdd.input"
                                                                transition="scale-transition"
                                                                offset-y
                                                                max-width="290px"
                                                                min-width="290px"
                                                            >
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-text-field
                                                                v-model="dataAdd.input"
                                                                label="Desde"
                                                                readonly
                                                                v-bind="attrs"
                                                                :rules="rules"
                                                                v-on="on"
                                                                outlined
                                                                dense
                                                                ></v-text-field>
                                                            </template>

                                                            <v-time-picker v-if="from_menu" v-model="dataAdd.input" full-width>
                                                                <v-spacer></v-spacer>
                                                                <v-btn outlined text color="primary" @click="from_menu = false">Cancelar</v-btn>
                                                                <v-btn color="primary" @click="$refs.from_menu.save(dataAdd.input)">OK</v-btn>
                                                            </v-time-picker>
                                                            </v-menu>
                                                            <v-menu
                                                                ref="to_menu"
                                                                v-model="to_menu"
                                                                :close-on-content-click="false"
                                                                :return-value.sync="dataAdd.output"
                                                                transition="scale-transition"
                                                                offset-y
                                                                max-width="290px"
                                                                min-width="290px"
                                                            >
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-text-field
                                                                    v-model="dataAdd.output"
                                                                    label="Hasta las"
                                                                    readonly
                                                                    v-bind="attrs"
                                                                    :rules="rules"
                                                                    v-on="on"
                                                                    outlined
                                                                    dense
                                                                    ></v-text-field>
                                                                </template>

                                                                <v-time-picker v-if="to_menu" v-model="dataAdd.output" full-width>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn outlined text color="primary" @click="to_menu = false">Cancelar</v-btn>
                                                                    <v-btn color="primary" @click="$refs.to_menu.save(dataAdd.output)">OK</v-btn>
                                                                </v-time-picker>
                                                            </v-menu>
                                                            <v-checkbox
                                                                v-model="dataAdd.every_single_day"
                                                                class="text-h6 font-weight-bold"
                                                                label="Todo el dia"
                                                            ></v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        @click="step = 3"
                                        :disabled="!valid_step_2"
                                        depressed
                                    >
                                        Siguiente
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <vue-dropzone
                                            ref="imagesDropzone"
                                            id="images-dropzone"
                                            :options="imagesOption"
                                            @vdropzone-success="imagesCleanFiles()"
                                        ></vue-dropzone>
                                    </v-col>
                                </v-row>
                                <v-row v-if="!images.busy && images.list.length == 0">
                                    <v-col cols="12" class="text-center text-h4 font-weight-bold">
                                        No hay imagenes guardadas.
                                    </v-col>
                                </v-row>
                                <v-row v-if="images.busy">
                                    <v-col cols="12">
                                        <v-progress-linear
                                            indeterminate
                                            color="primary"
                                        ></v-progress-linear>
                                    </v-col>
                                </v-row>
                                <v-slide-group
                                    v-model="imagesSelect"
                                    multiple
                                >
                                    <v-slide-item
                                        v-for="(img, i) in images.list"
                                        :key="i"
                                        class="mr-4 py-4"
                                        color="dark"
                                        v-slot:default="{ active, toggle }"
                                        :value="img.path"
                                    >
                                        <v-card
                                            width="150"
                                            height="200"
                                            @click="toggle"
                                            elevation="6"
                                        >
                                            <v-img
                                                :src="'/uploads/images/'+img.path"
                                                width="100%"
                                                height="100%"
                                            />
                                            <v-overlay
                                                :value="active"
                                                color="rgba(0, 0, 0, 1)"
                                                absolute
                                            >
                                                <v-icon color="primary" large>
                                                    check_circle_outline
                                                </v-icon>
                                            </v-overlay>
                                        </v-card>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    class="mr-0 text-capitalize"
                                    :disabled="!valid_step_3"
                                    @click="step = 4"
                                    depressed
                                >
                                    Siguiente
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <vue-dropzone
                                            ref="videosDropzone"
                                            id="videos-dropzone"
                                            :options="videosOptions"
                                            @vdropzone-success="videosCleanFiles()"
                                        ></vue-dropzone>
                                    </v-col>
                                </v-row>
                                <v-row v-if="!videos.busy && videos.list.length == 0">
                                    <v-col cols="12" class="text-center text-h4 font-weight-bold">
                                        No hay videos guardados.
                                    </v-col>
                                </v-row>
                                <v-row v-if="videos.busy">
                                    <v-col cols="12" sm="8" md="6">
                                        <v-progress-linear
                                            indeterminate
                                            color="primary"
                                        ></v-progress-linear>
                                    </v-col>
                                </v-row>
                                <v-slide-group
                                    v-model="videosSelect"
                                    class="py-4"
                                    multiple
                                >
                                    <v-slide-item
                                        v-for="(v, i) in videos.list"
                                        :key="i"
                                        class="mr-4"
                                        color="dark"
                                        v-slot:default="{ active, toggle }"
                                        :value="v.id"
                                    >
                                        <v-card
                                            width="200"
                                            height="200"
                                            tile
                                            elevation="6"
                                        >
                                            <v-img
                                                :src="'/uploads/images/'+v.image_path+'.png'"
                                                width="100%"
                                                height="70%"
                                                @click="toggle"
                                                style="cursor: pointer;"
                                            >
                                                <v-overlay
                                                    :value="active"
                                                    color="rgba(0, 0, 0, 1)"
                                                    absolute
                                                >
                                                    <v-icon color="primary" large>
                                                        check_circle_outline
                                                    </v-icon>
                                                </v-overlay>
                                            </v-img>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn @click="selectVideo(v)" icon>
                                                    <v-icon color="primary">
                                                        play_arrow
                                                    </v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-slide-item>
                                </v-slide-group>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    class="mr-0 text-capitalize"
                                    @click="update"
                                    :disabled="busy || !valid_step_4"
                                    :loading="busy"
                                    depressed
                                >
                                    Actualizar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-col>
        <VideoPlayer @close="videos.playing = false" :showing="videos.playing" :item="videos.selected" />
    </v-row>
</template>

<script src="./publications-edit.js"></script>

<style>
    @import url('./publications-edit.scss');
</style>
