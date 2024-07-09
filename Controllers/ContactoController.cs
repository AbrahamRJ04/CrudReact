using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CrudReact.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace CrudReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : ControllerBase
    {

        private readonly DBCallCenterContext _dbCallCenterContext;

        public ContactoController(DBCallCenterContext dbCallCenterContext)
        {
            _dbCallCenterContext = dbCallCenterContext;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Contacto> lista = await _dbCallCenterContext.Contactos.OrderByDescending(c => c.IdContacto).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Contacto request)
        {
           await _dbCallCenterContext.Contactos.AddAsync(request);
           await _dbCallCenterContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Contacto request)
        {
             _dbCallCenterContext.Contactos.Update(request);
            await _dbCallCenterContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }



        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int ID)
        {
            Contacto contacto = _dbCallCenterContext.Contactos.Find(ID);
            _dbCallCenterContext.Contactos.Remove(contacto);
            await _dbCallCenterContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");

        }
    }
}
