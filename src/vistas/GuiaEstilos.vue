<template>
  <main>
    <h1>Elementos nativos</h1>
    
    <h2>Títulos</h2>

    <h1> h1 </h1>
    <h2> h2 </h2>
    <h3> h3 </h3>
    <h4> h4 </h4>
    <h5> h5 </h5>
    <h6> h6 </h6>
    

    <h3>Grupo de cabecera</h3>
    <hgroup>
      <h2> Título </h2>
      <h3> Subtítulo </h3>
      <p> Algún otro texto de ayuda para mejorar la información de los titulares. </p>
    </hgroup>

    <hr />

    <h2>Texto</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Vero accusamus nisi officiis qui eligendi minus aperiam dolor,
      ea nam, nostrum repellat maxime fugiat dolorem rerum,
      distinctio deleniti quia optio harum.
    </p>
    <p>
      b <b>grueso</b>
      strong <strong>fuerte</strong>
      small <small>pequeño</small>
      i <i>italica</i>
      abbr <abbr title='abbr title'>abreviación</abbr>
      ins <ins>insertado</ins>
      del <del>eliminado</del>
      dfn <dfn>definición</dfn>
      sub <sub>subíndice</sub>
      sup <sup>superíndice</sup>
      em <em>énfasis</em>
      cite <cite>cita</cite>
      q <q cite=''>cita</q>
      mark <mark>resaltado</mark>
    </p>
    
    <blockquote cite='http://es.lipsum.com/'>
      Cita Laaaaaarga 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus velit nulla, scelerisque quis aliquam eget,
      rhoncus tincidunt lacus. Aliquam blandit est lacinia
      fringilla pulvinar. 
    </blockquote>

    
    
    <h3>Código</h3>
    
    <p>
      <code>código</code>
      <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>design!</kbd>
      <samp>Mensaje del sistema</samp>
      <var>variable</var>
    </p>

    <pre>
    Texto Preformateado
    L
      o
        r
          e
            m
              ipsum dolor sit amet
    </pre>

    <hr />

    <h2>imagen</h2>
    <figure>
      <img src="https://picsum.photos/880/400" alt="lorem picsum">
      <img src="https://picsum.photos/500/400" alt="lorem picsum">
      <img src="https://picsum.photos/580/400" alt="lorem picsum">
      <img src="https://picsum.photos/800/400" alt="lorem picsum">
      <figcaption>Lorem pictum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et vel molestiae
        officiis in sit amet? Recusandae blanditiis consequatur maxime officiis nobis quae, perferendis quam totam
        aut, sequi modi placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos nostrum
        facere? Distinctio quibusdam sequi molestias voluptas, nam ipsa architecto, qui hic assumenda consectetur
        tempora harum autem officiis quia consequuntur.</figcaption>
    </figure>
    <picture>
      <img src="https://picsum.photos/1200/700" alt="lorem picsum">
    </picture>
  
    <hr />

    <h2>lista</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi inventore, quia dolorum dolores odit maxime eligendi officia eum. Deserunt repudiandae molestiae cumque unde fuga accusamus perspiciatis eveniet voluptatum beatae consequuntur.</p>
    <ul>
      <li>lista desordenada</li>
      <li>estilos default</li>
      <li>con circulitos como siempre</li>
      <li>lista anidada
        <ol>
          <li>lista ordenada</li>
          <li>osea que tiene numeros</li>
        </ol>
      </li>
    </ul>
    <ol>
      <li>lista ordenada</li>
      <li>osea que tiene numeros
        <ol>
          <li>mas listas anidadas</li>
          <li>con numeritos
            <ol>
              <li>mas listas anidadas</li>
              <li>con numeritos
                <ol>
                  <li>mas listas anidadas</li>
                  <li>con numeritos</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>na fancy que ver</li>
    </ol>
    <dl>
      <dt>nombre</dt>
      <dd>description</dd>
      <dt>nombre</dt>
      <dd>description</dd>
    </dl>

    <hr />
  
    <h2>tabla</h2>
    <table>
      <thead>
        <tr>
          <th>cabecera</th>
          <th>nombres</th>
          <th>variables</th>
          <th>titulos</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>pie</td>
          <td>de</td>
          <td>tabla</td>
          <td>.</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>contenido</td>
          <td>informacion</td>
          <td>asd</td>
          <td>este</td>
        </tr>
        <tr>
          <td>contenido</td>
          <td>informacion</td>
          <td>asd</td>
          <td>este</td>
        </tr>
        <tr>
          <td>contenido</td>
          <td>informacion</td>
          <td>asd</td>
          <td>este</td>
        </tr>
      </tbody>
    </table>
    <table>
      <caption>Ejemplo de una tabla mas ancha que seguro no cabe en el celular. No tiene contenedor asi que por default va a expandirse mostrando el horrible scroll horizontal, que a menos que sea por diseño, no se deberia de ver nunca</caption>
      <thead>
        <tr>
          <th>thead con un titulotototote pa pegarlo al caption</th>
          <th>th</th>
          <th>titulo largo de cabecera</th>
          <th>cabecera de tabla</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>y luego en el cuerpo de la tabla</td>
          <td>debe se estar centrado? o quizas arriba... na el arriba no me gusto</td>
          <td>cual deberia de ser la mejor alineacion para leer una tabla? yo creo que centrado esta chido y el header asi apachurradito</td>
          <td>ta bueno, pues</td>
        </tr>
        <tr>
          <td>y luego en el cuerpo de la tabla</td>
          <td>debe se estar centrado? o quizas arriba... na el arriba no me gusto</td>
          <td>cual deberia de ser la mejor alineacion para leer una tabla? yo creo que centrado esta chido y el header asi apachurradito</td>
          <td>ta bueno, pues</td>
        </tr>
        <tr>
          <td>y luego en el cuerpo de la tabla</td>
          <td>debe se estar centrado? o quizas arriba... na el arriba no me gusto</td>
          <td>cual deberia de ser la mejor alineacion para leer una tabla? yo creo que centrado esta chido y el header asi apachurradito</td>
          <td>ta bueno, pues</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>enlace</h2>
    <p>Lorem ipsum dolor sit amet <a href="#">link</a> consectetur adipisicing elit. Distinctio, sed ipsum? Rem maiores provident nobis praesentium ex eos quos soluta dolores, beatae voluptate modi explicabo at? Facere porro nobis quibusdam!</p>

    <hr />
  
    <h2>acordeon</h2>
    <details>
      <summary>Details Summary</summary>
      <p>En el summary va el título descriptivo o resumen de lo que se quiera hablar. Después va toda la demás información, detalle, descripción... además no importa que contenido se ponga, se puede utilizar cualquier etiqueta (o ninguna).</p>
    </details>
    <details>
      <summary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid saepe totam adipisci animi, qui, numquam iusto beatae aut quam perferendis voluptatibus quas quia temporibus eius itaque impedit possimus aspernatur.</summary>
      <p>parrafo</p>
      <ul>
        <li>lista</li>
        <li>ejeles</li>
        <li>pos</li>
        <li>como</li>
        <li>crees</li>
      </ul>
      <p>parrafo</p>
    </details>
  
    <hr />

    <h2>Botón</h2>
    <p>
      <button type="button">Botón</button>
    </p>

    <h2>Formulario</h2>

    <form action="#">
      <p>Estados generales de elementos de formularios</p>
      <label for="predefinido">Predefinido</label>
      <input id="predefinido" type="text" value="" placeholder="input">
      <label for="invalido">Inválido</label>
      <input id="invalido" type="email" value="" placeholder="email:required" required>
      <label for="sololectura">sololectura</label>
      <input id="sololectura" type="text" placeholder="a11y usar readonly mejor que readonly" readonly>
      <label for="lectura">Solo lectura</label>
      <input id="lectura" type="text" placeholder=":readonly" readonly value="solo lectura">
      <button type="button">Botón</button>
      <button type="button" disabled>Botón deshabilitado</button>
    </form>


    <form>
      <p>Tipos de entrada generales</p>
      <input type="email" id="correo" pattern=".+@globex\.com" size="30" placeholder="Correo: persona@globex.com">
      <input type="password" id="contrasenia" minlength="8" placeholder="contraseña">
      <input type="number" id="numero" min="10" max="100" placeholder="10">
      <input type="search" id="buscar" placeholder="buscar">
      <input type="tel" id="telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Teléfono: 333-333-4444">
      <input type="text" id="texto" minlength="4" maxlength="8" size="10" placeholder="Texto">
      <input type="url" id="direccion" placeholder="https://example.com" pattern="https://.*" size="30">

    </form>
    <form>
      <p>Archivo</p>
      <input type="file" id="file" accept="image/png, image/jpeg">
    </form>
  
    <form>
      <p>Tiempo</p>
      <label for="fecha">date</label>
      <input type="date" id="fecha" value="2016-07-22" min="2018-01-01" max="2018-12-31" required>
      <label for="fechatiempo">date time local</label>
      <input type="datetime-local" id="fechatiempo" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2028-06-14T00:00" readonly>
      <input type="time" id="tiempo" min="09:00" max="18:00">
      <input type="month" id="mes" min="2018-03" value="2018-05">
      <input type="week" id="semana" min="2018-W18" max="2018-W26">
    </form>

    <form>
      <p>Color</p>
      <label for="color">color</label>
      <input type="color" id="color" value="#6600ff" oninput="colorhex.value=value">
      <output id="colorhex">#6600ff</output>
    </form>

    <form>
      <p>Selector</p>
      <select id="selector">
        <option value="" readonly selected>seleccione algo</option>
        <optgroup label="Grupo Uno">
          <option value="uno">uno</option>
          <option value="dos">dos</option>
          <option value="tres">tres</option>
          <option value="cuatro">cuatro</option>
        </optgroup>
        <option value="otro-uno">Opcion dos</option>
        <option value="otro-dos">Opcion tres</option>
      </select>
  
      <select id="selector-sololectura" readonly>
        <option value="">selector solo lectura</option>
        <option value="1">uno lectura</option>
      </select>
    </form>
    
    <form>
      <h3>type &equals; &ldquo; radio &rdquo; / &rsaquo;</h3>

      <input type="radio" name="ra" id="radio1">
      <label for="radio1">Radio 1</label>
      <input type="radio" name="ra" id="radio2" checked>
      <label for="radio2">Radio 2</label>
      
      <h3>type &equals; &ldquo; checkbox &rdquo; / &rsaquo;</h3>
      
      <input type="checkbox" name="ch" id="checkbox1" required>
      <label for="checkbox1">Caja verificación</label>
      <input type="checkbox" name="ch" id="checkbox2" indeterminate>
      <label for="checkbox2">Caja indeterminada</label>
      <input type="checkbox" name="ch" id="checkbox3" checked>
      <label for="checkbox3">Caja verificada</label>

    </form>


    <h3>&lsaquo; textarea &rsaquo;</h3>
    <label for="textarea">Label for</label>
    <textarea id="textarea" cols="30" rows="10" placeholder="área de texto"></textarea>

    <fieldset>
      <legend>legend</legend>
      <label for="ejem">label for input</label>
      <input type="text" id="ejem">
    </fieldset>
  
    <h3>list &equals; &ldquo; id-datalist &rdquo; / &rsaquo;</h3>
    <p>
      Se recomienda utilizar datalist con los inputs de tipo text, search, url, tel, email y number.
      Aunque es un atributo valido para los inputs tipo text, search, url, tel, email, date, month, week, time, datetime-local, number, range, y color.
    </p>
    <p>
      <label for="ice-cream-choice">Nieve:</label> 
      <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" type="text">
      <datalist id="ice-cream-flavors">
        <option value="Chocolate" />
        <option value="Coco" />
        <option value="Menta" />
        <option value="Fresa" />
        <option value="Vainilla" />
      </datalist>
    </p>
  </main>
</template>
