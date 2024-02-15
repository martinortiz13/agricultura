using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgriculturaApi
{
    public class Windos1252EncodingProvider : EncodingProvider
    {
        //1252
        public override Encoding GetEncoding(int codepage)
        {
            return null; // we're only matching on name, not codepage
        }

        public override Encoding GetEncoding(string name)
        {
            if (string.Equals("cp1252", name, StringComparison.OrdinalIgnoreCase))
            {
                return Encoding.GetEncoding(1252); // this will load an encoding from the CodePagesEncodingProvider
            }
            return null;
        }
    }
}