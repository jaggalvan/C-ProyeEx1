using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using PracticaFinalAdrian.Models;

namespace PracticaFinal.Controllers
{
    [Route("api/Personaitem")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly PracticafinalContext _dbcontext;

        public PersonaController(PracticafinalContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<PersonaItem> lista = await _dbcontext.PersonaItems.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] PersonaItem request)
        {
            await _dbcontext.PersonaItems.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] PersonaItem request)
        {
            _dbcontext.PersonaItems.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            PersonaItem persona = _dbcontext.PersonaItems.Find(id);

            _dbcontext.PersonaItems.Remove(persona);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
