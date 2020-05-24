using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    #region ContentController
    [Route("api/[controller]")]
    [EnableCors("AllowAnyOrigin")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private readonly ContentContext _context;

        public ContentController(ContentContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/Content
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Content>>> GetContent()
        {
            return await _context.Content.ToListAsync();
        }

        #region snippet_GetByID
        // GET: api/content/${id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Content>> GetContent(long id)
        {
            var content = await _context.Content.FindAsync(id);

            if (content == null)
            {
                return NotFound();
            }

            return content;
        }
        #endregion

        #region snippet_Update
        // PUT: api/content/${id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContent(long id, Content content)
        {
            if (id != content.Id)
            {
                return BadRequest();
            }

            _context.Entry(content).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            // return code 204
            return NoContent();
        }
        #endregion

        #region snippet_Create
        // POST: api/Content
        [HttpPost]
        public async Task<ActionResult<Content>> PostContent(Content content)
        {
            _context.Content.Add(content);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContent), new { id = content.Id }, content);
        }
        #endregion

        #region snippet_Delete
        // DELETE: api/content/${id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<Content>> DeleteContent(long id)
        {
            var content = await _context.Content.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.Content.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }
        #endregion

        private bool ContentExists(long id)
        {
            return _context.Content.Any(e => e.Id == id);
        }
    }
}