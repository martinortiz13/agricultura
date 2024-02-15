using System.Text;
using AgriculturaApi;

var builder = WebApplication.CreateBuilder(args);

     //   private const string AllowAllOriginsPolicy = "AllowAllOriginsPolicy";


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

            
builder.Services.AddResponseCompression();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            Encoding.RegisterProvider(new Windos1252EncodingProvider());


            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOriginsPolicy",
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                    });
            });            

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

            app.UseCors("AllowAllOriginsPolicy");


app.Run();
