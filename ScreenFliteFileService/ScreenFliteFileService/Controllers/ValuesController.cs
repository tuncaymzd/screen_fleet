using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ScreenFliteFileService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var resp = "API Up and Running perfectly !!!";
            return Ok(resp);
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return $"API Running perfectly. Gotten {id}";
        }
    }
}
