using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static System.Environment;

namespace ScreenFliteFileService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScreenFilesController : ControllerBase
    {
        string folder = "screenFlit";

        [HttpGet("getFile/{fileName}")]
        public async Task<IActionResult> GetFile(string fileName)
        {
            await Task.CompletedTask;
            string path = Path.Combine(GetFolderPath(SpecialFolder.Desktop), $"{folder}{Path.DirectorySeparatorChar}{fileName}");
            if (!System.IO.File.Exists(path))
                return NotFound();
            return File(System.IO.File.ReadAllBytes(path), "application/force-download", fileName);
        }

        [HttpGet("streamVideo/{fileName}")]
        public async Task<IActionResult> StreamVideo(string fileName)
        {
            await Task.CompletedTask;
            string path = Path.Combine(GetFolderPath(SpecialFolder.Desktop), $"{folder}{Path.DirectorySeparatorChar}{fileName}");
            if (!System.IO.File.Exists(path))
                return NotFound();
            return File(System.IO.File.OpenRead(path), "video/mp4");
        }
    }
}
