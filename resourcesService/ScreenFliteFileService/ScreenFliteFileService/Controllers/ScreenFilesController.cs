using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static System.Environment;

namespace ScreenFliteFileService.Controllers
{
    /// <summary>
    /// This Controller handles operations made on 
    /// Resources at the Backend Level
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ScreenFilesController : ControllerBase
    {
        string _folder = "screenFlit";

        /// <summary>
        /// Get a resource without streaming it.
        /// </summary>
        /// <param name="fileName">The name of the file to download.</param>
        /// <returns></returns>
        [HttpGet("getFile/{fileName}")]
        public async Task<IActionResult> GetFile(string fileName)
        {
            await Task.CompletedTask;
            string path = Path.Combine(GetFolderPath(SpecialFolder.Desktop), $"{_folder}{Path.DirectorySeparatorChar}{fileName}");
            if (!System.IO.File.Exists(path))
                return NotFound(); 
            return File(System.IO.File.ReadAllBytes(path), "application/force-download", fileName);
        }

        /// <summary>
        /// Gets and Streams a video from the backend to the front end application requesting it.
        /// </summary>
        /// <param name="fileName">The name of the file to be streamed.</param>
        /// <returns></returns>
        [HttpGet("streamVideo/{fileName}")]
        public async Task<IActionResult> StreamVideo(string fileName)
        {
            await Task.CompletedTask;
            string path = Path.Combine(GetFolderPath(SpecialFolder.Desktop), $"{_folder}{Path.DirectorySeparatorChar}{fileName}");
            if (!System.IO.File.Exists(path))
                return NotFound();
            return File(System.IO.File.OpenRead(path), "video/mp4");
        }

        /// <summary>
        /// Gets the list of resources available at the server level.
        /// </summary>
        /// <returns>List of regourses.</returns>
        [HttpGet("getResource")]
        public IActionResult GetResources()
        {
            return Ok(new { Resources = Directory.GetFiles(Path.Combine(GetFolderPath(SpecialFolder.Desktop), _folder)).Select(f => Path.GetFileName(f)) });
        }

        /// <summary>
        /// Uploads a new resource from the front end application to the backend server side.
        /// </summary>
        /// <param name="file">Name of the file to be uploaded.</param>
        /// <returns>Confirmation of the upload process termination.</returns>
        [HttpPost("upload")]
        public async Task<IActionResult> AddResource(IFormFile file)
        {
            try
            {
                // full path to file in temp location
                //var filePath = Path.GetTempFileName();
                string path = Path.Combine(GetFolderPath(SpecialFolder.Desktop), $"{_folder}{Path.DirectorySeparatorChar}{file.FileName}");

                if (file == null || file.Length == 0)
                    return Content("file not selected");

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return Ok(new { FileName = path });
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                throw;
            }
        }
    }
}
