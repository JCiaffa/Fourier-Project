using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FourierProject.Models;
namespace FourierProject.Controllers;
    
public class HomeController : Controller
{
    private MyContext db;
    public HomeController(MyContext context)
    {
        db = context;
    }
    
    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("/square")]
    public IActionResult Square()
    {
        return View();
    }

    [HttpGet("/square/decomposition")]
    public IActionResult SquareDecomp()
    {
    return View();
    }

    [HttpGet("/sawtooth")]
    public IActionResult Sawtooth()
    {
        return View();
    }

    [HttpGet("/saw/decomposition")]
    public IActionResult SawDecomp()
    {
    return View();
    }

    [HttpGet("/triangle")]
    public IActionResult Triangle()
    {
        return View();
    }

    [HttpGet("/triangle/decomposition")]
    public IActionResult TriDecomp()
    {
    return View();
    }

    [HttpGet("/custom")]
    public IActionResult Custom()
    {
        
    return View();
    }

    [HttpGet("/test")]
    public IActionResult Test()
    {
    return View();
    }
 }